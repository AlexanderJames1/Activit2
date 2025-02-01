function Resume(props) {
    return(
      <div>
        <div className="fixed left-0 top-0 border-1 h-screen border-gray-500
                      bg-gray-200 text-gray-800 p-6 rounded-t-none rounded-l-none 
                        rounded-lg shadow-lg text-center">
            <img src={props.img1} alt="Profile" className="mb-5 w-24 h-24 mx-auto rounded-full border-1" />
            <h1 className="text-xl font-bold text-black">{props.name}</h1>
            <p className="text-sm text-black mb-7">{props.description}</p>
            <h2 className="border-1 bg-black text-white">Contact Information</h2>
              <p className="text-black font-bold">Email:<span className="font-normal">{props.email}</span> </p>
              <p className="text-black font-bold">Phone: <span className="font-normal">{props.phone}</span> </p>
              <p className="text-black font-bold mb-7">Address: <span className="font-normal">{props.address}</span> </p>
            <h2 className="border-1 bg-black text-white">Skills</h2>
              <p className="text-black font-semibold">{props.skill1}</p>
              <p className="textblack font-semibold">{props.skill2}</p>
              <p className="tex-black font-semibold">{props.skill3}</p>
              <p className="text-black font-semibold">{props.skill4}</p>
              <p className="text-black font-semibold">{props.skill5}</p>
              <p className="text-black font-semibold mb-5">{props.skill6}</p>
            <h2 className="border-1 bg-black text-white">Education</h2>
              <p className="text-black font-bold">{props.elem}</p>
              <p className="text-black font-semibold">{props.year1}</p>
              <p className="text-black font-bold">{props.high}</p>
              <p className="text-black font-semibold">{props.year2}</p>
              <p className="text-black font-bold">{props.college}</p>
        </div>
        <div className="flex-1 ml-[25%] p-6">
          <h2 className="border-1 bg-black text-white text-center">Achievements</h2>
              <p className="text-black font-bold text-left">*{props.achv1}</p>
              <p className="text-black font-bold text-left">*{props.achv2}</p>
              <p className="text-black font-bold text-left">*{props.achv3}</p>
              <p className="text-black font-bold text-left">*{props.achv4}</p>
              <p className="text-black font-bold text-left mb-7">*{props.achv5}</p>
            <h2 className="border-1 bg-black text-white text-center">Hobies</h2>
              <p className="text-black font-bold text-left">*{props.hb1}</p>
              <p className="text-black font-bold text-left">*{props.hb2}</p>
              <p className="text-black font-bold text-left">*{props.hb3}</p>
              <p className="text-black font-bold text-left">*{props.hb4}</p>
              <p className="text-black font-bold text-left">*{props.hb5}</p>
              <p className="text-black font-bold text-left">*{props.hb6}</p>
              <p className="text-black font-bold text-left">*{props.hb7}</p>
              <p className="text-black font-bold text-left">*{props.hb8}</p>
              <p className="text-black font-bold text-left">*{props.hb9}</p>
              <p className="text-black font-bold text-left mb-5">*{props.hb10}</p>
            <h2 className="border-1 bg-black text-white text-center">Interest</h2>
              <p className="text-black font-bold text-left">*{props.in1}</p>
              <p className="text-black font-bold text-left">*{props.in2}</p>
              <p className="text-black font-bold text-left mb-5">*{props.in3}</p>
            <h2 className="border-1 bg-black text-white text-center">Languages</h2>
              <p className="text-black font-bold text-left">*{props.l1}</p>
              <p className="text-black font-bold text-left">*{props.l2}</p>
              <p className="text-black font-bold text-left">*{props.l3}</p>
        </div>
      </div>
    )
}

export default Resume;