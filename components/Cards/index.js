import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="flex h-20 p-2 m-2 w-1/2 bg-gray-200 rounded-lg hover:cursor-pointer hover:shadow border">
      {/* Logo */}
      <div>
        <Image
          src="/images/nostr_btc.jpg"
          height={1200}
          width={1200}
          className="h-16 w-16 rounded-lg  "
        />
      </div>
      {/* Information */}
      <div className="mx-2">
        <h1 className="text-gray-800 font-medium text-lg">Hello</h1>
        <p className="text-gray-800 font-light text-sm">Lorem10dsfjsfsjf[sjsfkslsf dfhdsfhs adfdsfd sfsfijbsafoefib dfioaehgno ouibv sofis</p>
      </div>
    </div>
  );
}

export default index;
