"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import AIForm from "@components/AIForm";

const GeneratePrompt = () => {
  const router = useRouter();
  // const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const callPalmAPI = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    try {
      // console.log(post.prompt);
      // console.log(process.env.PALM_API_URL);
      // const response = await fetch("/api/prompt/ai_generate", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     prompt: {"text": post.prompt},
          
      //     // userId: session?.user.id,
      //     // tag: post.tag,
      //   }),
      // });
      console.log("Call successful");
      // if (response.ok) {
      //   router.push("/");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <AIForm
      type='Test'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={callPalmAPI}
    />
  );
};

export default GeneratePrompt;
