import qr from "./assets/image-qr-code.png"
export default function App(){
  return(
    <div className="flex flex-col bg-pale-blue min-h-screen items-center justify-center ">
      <div className="w-[250px] flex flex-col gap-2 rounded-xl px-4 py-4 bg-white items-center justify-center">
        <div className=" flex flex-col">
          <img className="flex flex-col rounded-lg" src={qr} alt="qr" />
        </div>
        <div className="font-outfitBold text-center">Improve your front-end skills by building projects</div>
        <div className="font-outfitRegular text-center text-xs">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
      </div>
    </div>
  )
}
