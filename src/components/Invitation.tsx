/* eslint-disable @next/next/no-img-element */
import BoxReveal from "./ui/box-reveal";

export async function Invitation() {
  return (
    <div className="h-full max-w-lg items-center flex flex-col justify-center overflow-hidden p-8 gap-20">

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <img src="/img/invitation/1.png" width={100} height={100} alt="Logo" className="w-full"/>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <img src="/img/invitation/2.png" width={100} height={100} alt="Logo" className="w-full"/>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <img src="/img/invitation/3.png" width={100} height={100} alt="Logo" className="w-full"/>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <img src="/img/invitation/4.png" width={100} height={100} alt="Logo" className="w-full"/>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <img src="/img/invitation/5.png" width={100} height={100} alt="Logo" className="w-full"/>
      </BoxReveal>   
    </div>
  );
}
