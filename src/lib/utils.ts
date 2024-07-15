import { toast } from "sonner";

export const handleError = (error: unknown) => {
  // React query v5 will type error as 'Error', not 'unknown' anymore
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong.";
  }
  toast.error(message);
};
