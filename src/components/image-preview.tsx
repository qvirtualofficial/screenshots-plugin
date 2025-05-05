import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ServerScreenshot } from "@/components/screenshot-uploader.tsx";
import { Badge } from "@/components/ui/badge.tsx";

export function ImagePreview(props: {
  screenshot: ServerScreenshot;
  onDelete: (photo_id: ServerScreenshot["id"]) => void;
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card className="overflow-hidden max-w-sm w-full bg-white">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="aspect-video w-full overflow-hidden bg-zinc-200">
          <img
            src={props.screenshot.url}
            className="h-full w-full object-contain transition-all hover:scale-105"
          />
        </div>

        {isHovering && (
          <div className="absolute top-2 right-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => props.onDelete(props.screenshot.id)}
                    className="h-8 w-8 rounded-full opacity-90 shadow-md"
                    aria-label="Delete image"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete image</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>

      <CardContent className="p-4 shrink-0">
        <div className="space-y-1 ">
          <div className={"flex items-center justify-between"}>
            <Badge>{props.screenshot.properties.phase}</Badge>
            <span className={"text-xs text-muted-foreground"}>
              {new Date(props.screenshot.created_at).toLocaleTimeString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
