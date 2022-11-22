import Image from "next/legacy/image";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[600px] mx-5 flex flex-col items-center mt-10 md:my-20">
        <div className="rounded-full align-middle w-[150px] h-[150px] border-4 border-beige-300 dark:border-transparent overflow-hidden mb-5">
          <Image src="/unempfrog.jpg" alt="avatar" width="200" height="200" />
        </div>
        <div className="text-center mx-3">
          <p>
            A human? What are you doing here? I believe you ended up in the
            wrong place... I'm happy to have you here though! I don't get to see
            any people most of the time... So, please feel free to stay or head
            back if you must...
          </p>
        </div>
        <Link scroll={false} href="/">
          <div className="py-3 px-4 mt-5 bg-indigo-500 text-white rounded">
            Head Back
          </div>
        </Link>
      </div>
    </div>
  );
}
