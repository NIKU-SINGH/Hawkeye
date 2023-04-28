// import { useEffect, useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Card from "../components/Cards/index";
// import Table from "../components/Table/Table";
// import Mainnav from "../components/Navbar/mainNavbar";
// import { getTips, getBlockByHeight } from "@/helper";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 6,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// // Card Data
// const data = [
//   {
//     name: "Rpi 4",
//     node_id: "5",
//     status: "Active",
//     height: 77777,
//     img: "/images/rpi.png",
//   },
//   {
//     name: "bcoin",
//     node_id: "15",
//     status: "Stale",
//     height: 77779,
//     img: "/images/bcoin.png",
//   },
//   {
//     name: "Core",
//     node_id: "25",
//     status: "Active",
//     height: 77777,
//     img: "/images/core.png",
//   },
//   {
//     name: "bcoin",
//     node_id: "15",
//     status: "Stale",
//     height: 77779,
//     img: "/images/bcoin.png",
//   },
//   {
//     name: "Core",
//     node_id: "25",
//     status: "Active",
//     height: 77777,
//     img: "/images/core.png",
//   },
// ];

// function Explore() {
//   const [tips, setTips] = useState([]);
//   const [blockData, setBlockData] = useState([]);
//   const [maxHeight, setMaxHeight] = useState("");
//   const [isAddActive, setAddActive] = useState(false);
//   const [isRemoveActive, setRemoveActive] = useState(false);

//   useEffect(() => {
//     getData();
//     getBlockByHeightData();
//   }, [maxHeight]);

//   const getData = () => {
//     getTips()
//       .then((nodes_data) => {
//         setTips(nodes_data);
//         console.log(nodes_data);
//         setMaxHeight(nodes_data[0].height);
//       })
//       .catch((err) => console.log(err));
//   };

//   const getBlockByHeightData = async () => {
//     console.log(maxHeight);
//     getBlockByHeight(maxHeight ? maxHeight : 1)
//       .then((nodes_data) => {
//         setBlockData(nodes_data);
//         // console.log(nodes_data);
//       })
//       .catch((err) => console.log(err));
//   };
//   console.log(maxHeight, typeof maxHeight);
//   return (
//     <div>
//       {isAddActive && (
//         <div className="absolute w-[100vw] h-[100vh] bg-white z-10 flex justify-center items-center">
//           <div className="h-[270px] w-[500px] border-2 rounded-md flex flex-col gap-4 p-7">
//             <div className="flex w-[100%] gap-5">
//               <div className="flex flex-col gap-3 items-end">
//                 <div className="flex gap-3">
//                   <label>Name</label>
//                   <input
//                     type={"text"}
//                     className=" rounded w-32 border border-black"
//                   ></input>
//                 </div>
//                 <div className="flex gap-3">
//                   <label>RPC host</label>
//                   <input
//                     type={"text"}
//                     className=" rounded w-32 border border-black"
//                   ></input>
//                 </div>
//                 <div className="flex gap-3">
//                   <label>RPC Port</label>
//                   <input
//                     type={"text"}
//                     className=" rounded w-32 border border-black"
//                   ></input>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3 items-end">
//                 <div className="flex gap-3">
//                   <label>User</label>
//                   <input
//                     type={"text"}
//                     className=" rounded w-32 border border-black"
//                   ></input>
//                 </div>
//                 <div className="flex gap-3">
//                   <label>Password</label>
//                   <input
//                     type={"text"}
//                     className=" rounded w-32 border border-black"
//                   ></input>
//                 </div>
//                 <div className="flex gap-3">
//                   <label>Archive</label>
//                   <div className="flex gap-4">
//                     <button className="w-14 border rounded-md border-black">
//                       TRUE
//                     </button>
//                     <button className="w-14 border rounded-md border-black">
//                       FALSE
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-3 mt-3">
//               <label>Mirror RPC Port</label>
//               <input
//                 type={"text"}
//                 className=" rounded w-72 border border-black "
//               ></input>
//             </div>
//             <div className="flex justify-center">
//               <button
//                 onClick={() => setAddActive(false)}
//                 className="py-2 px-5 rounded-lg border border-black"
//               >
//                 ADD
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {isRemoveActive && (
//         <div className="absolute w-[100vw] h-[100vh] bg-white z-10 flex justify-center items-center">
//           <div className="h-[170px] w-[500px] border-2 rounded-md flex flex-col gap-4 p-7">
//             <div className="flex gap-3 mt-3">
//               <label>Node ID</label>
//               <input
//                 type={"text"}
//                 className=" rounded w-72 border border-black "
//               ></input>
//             </div>
//             <div className="flex justify-center">
//               <button
//                 onClick={() => setRemoveActive(false)}
//                 className="py-2 px-5 rounded-lg border border-black"
//               >
//                 REMOVE
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <Mainnav />
//       {/* TO manage Nodes */}
//       <div className=" flex items-center justify-center flex-col">
//         <h1 className="text-lg font-Poppins font-semibold">Manage Node</h1>
//         <div className="flex justify-around w-96 bg-orange-200 p-4 rounded-full">
//           <button
//             onClick={() => setAddActive(true)}
//             className="bg-orange-500 p-2 hover:bg-orange-400 w-32 text-white rounded"
//           >
//             Add
//           </button>
//           <button
//             onClick={() => setRemoveActive(true)}
//             className="bg-orange-500 p-2 w-32 hover:bg-orange-400 text-white rounded"
//           >
//             Remove
//           </button>
//         </div>

//         {/* Carousel Section */}
//         <div className="bg-orange-100 h-1/2 w-full m-4">
//           <Carousel responsive={responsive}>
//             {/* {data.map((card, idx) => (
//               <Card key={idx} card={card} />
//             ))} */}
//             {tips
//               ? tips.map((item) => {
//                   return <Card key={item.id} card={item} />;
//                 })
//               : "1111"}
//           </Carousel>
//         </div>

//         {/* Table Section */}
//         <div className=" w-full h-[80vh] bg-black">
//           <Table blockData={blockData[0]} />
//         </div>

//         {/* Get Block Info Section */}
//         <div className="w-full p-10 mx-8">
//           <h1 className="font-Poppins font-bold text-center text-3xl mt-4">
//             Get Blockchain Info
//           </h1>

//           <form className="flex flex-wrap items-center justify-center ">
//             <div class=" m-2 px-4 py-2 flex items-center justify-center bg-white rounded-full ">
//               <label
//                 className=" w-48  tracking-wide text-black text-base font-normal"
//                 htmlFor="Enter the Node Name"
//               >
//                 <button className="bg-orange-400 p-2 w-48 rounded text-white">
//                   Block By Height
//                 </button>
//               </label>
//               <input
//                 className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
//                 id="company"
//                 type="text"
//                 placeholder="Enter the Block Height"
//               />
//             </div>

//             <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
//               <label
//                 className=" w-48  tracking-wide text-black text-base font-normal"
//                 htmlFor="Enter the Node Name"
//               >
//                 <button className="bg-orange-400 p-2 w-48 rounded text-white">
//                   Block By Hash
//                 </button>
//               </label>
//               <input
//                 className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
//                 id="company"
//                 type="text"
//                 placeholder="Enter the Block Hash"
//               />
//             </div>

//             <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
//               <label
//                 className=" w-48  tracking-wide text-black text-base font-normal"
//                 htmlFor="Enter the Node Name"
//               >
//                 <button className="bg-orange-400 p-2 w-48 rounded text-white">
//                   Get tips
//                 </button>
//               </label>
//               {/* <input
//                 className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
//                 id="company"
//                 type="text"
//                 placeholder="Enter the Block Height"
//               /> */}
//             </div>

//             <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
//               <label
//                 className=" w-48  tracking-wide text-black text-base font-normal"
//                 htmlFor="Enter the Node Name"
//               >
//                 <button className="bg-orange-400 p-2 w-48 rounded text-white">
//                   Block from Peer
//                 </button>
//               </label>
//               {/* <input
//                 className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
//                 id="company"
//                 type="text"
//                 placeholder="Enter the Block Height"
//               /> */}
//             </div>

//             <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full w-[700px] inline-block ">
//               <label
//                 className=" w-48  tracking-wide text-black text-base font-normal"
//                 htmlFor="Enter the Node Name"
//               >
//                 <button className="bg-orange-400 p-2 w-48 rounded text-white">
//                   Get Peer
//                 </button>
//               </label>
//               <input
//                 className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
//                 id="company"
//                 type="text"
//                 placeholder="Enter the peer ID"
//               />
//             </div>
//           </form>
//         </div>

//         {/* Check Transaction Status */}
//         <h1 className="font-Poppins font-bold text-center text-3xl mt-4">
//           Check Transaction Status
//         </h1>
//         <form>
//           <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
//             <label
//               className=" w-48  tracking-wide text-black text-base font-normal"
//               htmlFor="Enter the Node Name"
//             >
//               <button className="bg-orange-400 p-2 w-48 rounded text-white">
//                 Check
//               </button>
//             </label>
//             <input
//               className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
//               id="company"
//               type="text"
//               placeholder="Enter the Block Height"
//             />
//           </div>
//         </form>

//         {/* Update Address List */}
//         <h1 className="font-Poppins font-bold text-center text-3xl mt-4">
//           Update Address List
//         </h1>
//         <form>
//           <div class=" px-4 m-2 py-2 flex items-center justify-center bg-white rounded-full ">
//             <label
//               className=" w-48  tracking-wide text-black text-base font-normal"
//               htmlFor="Enter the Node Name"
//             >
//               <button className="bg-orange-400 p-2 w-48 rounded text-white">
//                 Add
//               </button>
//             </label>
//             <input
//               className="ml-2 w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4"
//               id="company"
//               type="text"
//               placeholder="Enter the Block Height"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Explore;

import React from 'react'

function explore() {
  return (
    <div>explore</div>
  )
}

export default explore