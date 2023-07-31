import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log("ok");
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>NOT HERE</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
