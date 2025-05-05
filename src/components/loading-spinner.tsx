const LoadingSpinner = ({ title }: { title?: string }) => {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="h-24 w-24 animate-spin rounded-full border-b-2 border-primary"></div>
        {title && <p className="mt-4 text-lg">{title}</p>}
      </div>
    </div>
  );
};

export { LoadingSpinner };
