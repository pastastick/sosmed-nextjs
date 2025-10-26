"use client";

import React from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

function FollowButton({ userId }: { userId: string }) {
  const [isloading, setIsLoading] = React.useState(false);

  const handleFollow = async () => {
    setIsLoading(true);

    try {
      await toggleFollow(userId);
      toast.success("User followed successfully");
    } catch (error) {
      toast.error("Error following user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={handleFollow}
      disabled={isloading}
      className="w-20"
    >
      {isloading ? <Loader2Icon className="w-4 h-4 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
