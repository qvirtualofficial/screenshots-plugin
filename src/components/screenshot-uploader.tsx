import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { Upload } from "lucide-react";
import * as React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import { notify } from "@tfdidesign/smartcars3-ui-sdk";
import axios from "axios";
import { useIdentityQuery } from "@/hooks/useIdentityQuery.ts";
import { useTrackingDataQuery } from "@/hooks/useTrackingDataQuery.ts";
import { ImagePreview } from "@/components/image-preview.tsx";

import pluginJson from "@/../plugin.json";

export type ServerScreenshot = {
  id: number;
  url: string;
  properties: {
    phase: string;
    latitude: number;
    longitude: number;
    simVersion: string;
  };
  created_at: string;
};

const ScreenshotUploader = () => {
  const [_files, setFiles] = React.useState<File[]>([]);
  const { data: identityData } = useIdentityQuery();
  const { data: trackingData } = useTrackingDataQuery();

  const { data: serverScreenshots, refetch: serverScreenshotsRefetch } =
    useQuery({
      queryKey: ["screenshots", identityData?.airline.settings.scriptURL],
      queryFn: async () => {
        console.log(identityData?.airline.settings.scriptURL);
        const response = await axios.get<ServerScreenshot[]>(
          `${identityData?.airline.settings.scriptURL}screenshot/retrieve`,
          {
            params: {
              bid_id: trackingData?.flightPlanData?.bidID,
            },
            headers: {
              Authorization: `Bearer ${identityData?.va_user?.session}`,
            },
          },
        );
        console.log({ data: response.data });
        return response.data;
      },
    });

  const { mutate: deleteScreenshot } = useMutation({
    mutationFn: async (screenshotId: number) => {
      await axios.delete(
        `${identityData?.airline.settings.scriptURL}screenshot/delete?photo_id=${screenshotId}`,
        {
          headers: {
            Authorization: `Bearer ${identityData?.va_user?.session}`,
          },
        },
      );
      serverScreenshotsRefetch();
    },
  });

  const flightData = React.useMemo(() => {
    return JSON.stringify({
      latitude: trackingData?.trackingData?.simData.latitude,
      longitude: trackingData?.trackingData?.simData.longitude,
      phase: trackingData?.trackingData?.currentFlightPhase,
      simVersion: trackingData?.trackingData?.simVersion,
    });
  }, [
    trackingData?.trackingData?.simData.latitude,
    trackingData?.trackingData?.simData.longitude,
    trackingData?.trackingData?.currentFlightPhase,
    trackingData?.trackingData?.simVersion,
  ]);

  const onUpload = React.useCallback(
    async (
      files: File[],
      {
        onProgress,
        onSuccess,
        onError,
      }: {
        onProgress: (file: File, progress: number) => void;
        onSuccess: (file: File) => void;
        onError: (file: File, error: Error) => void;
        endpoint?: string;
      },
    ) => {
      try {
        // Process each file individually
        const uploadPromises = files.map(async (file) => {
          try {
            // Create a form data object to send the file
            const formData = new FormData();
            formData.append("file", file);
            formData.append(
              "bid_id",
              String(trackingData?.flightPlanData?.bidID),
            );
            formData.append("flight_data", flightData);

            // Make the upload request with progress tracking
            await axios.post(
              `${identityData?.airline.settings.scriptURL}screenshot/upload`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${identityData?.va_user?.session}`,
                },
                onUploadProgress: (progressEvent) => {
                  // Calculate and report progress percentage
                  const progress = progressEvent.total
                    ? Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total,
                      )
                    : 0;
                  onProgress(file, progress);
                },
              },
            );

            // Call success callback if the upload completes
            onSuccess(file);
            serverScreenshotsRefetch();

            // Display notification on success
            notify({
              message: "File uploaded successfully",
              quiet: true,
              source: pluginJson.id,
              type: "success",
              toast: true,
            });
          } catch (error) {
            // Handle errors for this specific file
            onError(
              file,
              error instanceof Error ? error : new Error("Upload failed"),
            );
          }
        });

        // Wait for all uploads to complete
        await Promise.all(uploadPromises);
      } catch (error) {
        // This handles any error that might occur outside the individual upload processes
        console.error("Unexpected error during upload:", error);
      }
    },
    [
      identityData?.va_user.session,
      flightData,
      trackingData?.flightPlanData?.bidID,
      serverScreenshotsRefetch,
    ],
  );

  const onFileReject = React.useCallback((file: File, message: string) => {
    console.log(file);
    notify({
      message,
      quiet: false,
      source: pluginJson.id,
      type: "danger",
      toast: true,
    });
  }, []);

  return (
    <div className={"p-6 flex flex-col flex-1 overflow-auto"}>
      <FileUpload
        value={_files}
        onValueChange={setFiles}
        onUpload={onUpload}
        onFileReject={onFileReject}
        className="w-full overflow-auto"
        multiple
      >
        <FileUploadDropzone className={"flex flex-1"}>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <Upload className="size-6 text-muted-foreground" />
            </div>
            <p className="font-medium text-sm">Drag & drop files here</p>
            <p className="text-muted-foreground text-xs">Or click to browse</p>
          </div>
          <FileUploadTrigger asChild>
            <Button size="sm" className="mt-2 w-fit">
              Browse files
            </Button>
          </FileUploadTrigger>
        </FileUploadDropzone>
        <div className={"overflow-auto"}>
          <div className={"grid grid-cols-4 xl:grid-cols-6 gap-3"}>
            {serverScreenshots?.map((screenshot) => {
              return (
                <ImagePreview
                  key={screenshot.id}
                  screenshot={screenshot}
                  onDelete={(photo_id) => deleteScreenshot(photo_id)}
                />
              );
            })}
          </div>
        </div>
      </FileUpload>
    </div>
  );
};
export { ScreenshotUploader };
