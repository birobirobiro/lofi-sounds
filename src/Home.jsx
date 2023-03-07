import { Headphones } from "@phosphor-icons/react";
import { SiTailwindcss, SiVercel, SiReact } from "react-icons/si"
import Card from "./components/Card";

function Home() {
  return (
    <div className="flex flex-col">
      <nav className="flex fixed w-full items-center p-5 justify-between border-slate-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">

        <div className="flex items-center gap-4">
          <a className="flex items-center gap-4" href="#">
            <Headphones size={32} />

            <h1 className="font-bold">lofi-sounds</h1>
          </a>
        </div>

        <ul className="flex">
          <a href="https://birobirobiro.dev"><li>
            <img src="/assets/logo.svg" alt="logo biro" width={30} height={30} /></li></a>
        </ul>
      </nav>

      <div className="flex w-full flex-col mx-auto">
        <header className="flex font-bold mt-20 lg:mb-10 justify-center text-4xl md:text-5xl lg:text-6xl">
          <div className="flex gap-4">
            <span className="animate-text1 bg-gradient-to-r from-title-1-start-color-100 via-title-1-middle-color-100 to-title-1-end-color-100 bg-clip-text font-black text-transparent">relax.</span>

            <span className="animate-text2 bg-gradient-to-r from-title-2-start-color-200 to-title-2-end-color-200 bg-clip-text font-black text-transparent">chill.</span>

            <span className="animate-text3 bg-gradient-to-r from-title-3-start-color-300 to-title-3-end-color-300 bg-clip-text font-black text-transparent">code.</span>

          </div>
        </header>

        <section className="mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3
        p-10
        " >
          <Card imageSrc="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg" imageAlt="lofi" />

          <Card imageSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51a7ab59-614b-4c06-a5e9-adffdf019204/ddwak0u-26b7de82-69ec-45f5-b862-78eec96b88b2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxYTdhYjU5LTYxNGItNGMwNi1hNWU5LWFkZmZkZjAxOTIwNFwvZGR3YWswdS0yNmI3ZGU4Mi02OWVjLTQ1ZjUtYjg2Mi03OGVlYzk2Yjg4YjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bNhHvuU_xRWaEw_MMIb_KwXeCRFYTULdI0pmEo00k-k" imageAlt="forest" />

          <Card imageSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40a835c8-7f26-4b31-9ce1-a1b7aeb65512/d92r39f-170cdf6d-6f0e-4ca1-af47-120a9253dfe0.jpg/v1/fill/w_1024,h_576,q_75,strp/3d_environment_by_dam3c_d92r39f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvNDBhODM1YzgtN2YyNi00YjMxLTljZTEtYTFiN2FlYjY1NTEyXC9kOTJyMzlmLTE3MGNkZjZkLTZmMGUtNGNhMS1hZjQ3LTEyMGE5MjUzZGZlMC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-kg4OboiQnJTtVN0WJPrM7dvX9MV-CCTablltOK-4Ic" imageAlt="fireplace" />

          <Card imageSrc="https://img.freepik.com/free-photo/classroom-wisdom-creative-education-indoor-lesson_53876-14437.jpg?w=1380&t=st=1678207073~exp=1678207673~hmac=fd155fc9bf3c3e5d4c527a51a89cbfc82cd7edba24763ebca8d5158639c387cb" imageAlt="office" />

          <Card imageSrc="https://i.redd.it/vyv1zo92b6k81.jpg" imageAlt="metro" />

          <Card imageSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7b1ed84-5a11-4fee-a965-54f279ac68e5/dakquql-de9789f6-c667-427d-953f-c0c39ec97432.jpg/v1/fill/w_1280,h_720,q_75,strp/neon_sunset_1_by_nikachalo_dakquql-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYTdiMWVkODQtNWExMS00ZmVlLWE5NjUtNTRmMjc5YWM2OGU1XC9kYWtxdXFsLWRlOTc4OWY2LWM2NjctNDI3ZC05NTNmLWMwYzM5ZWM5NzQzMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qm1iOevhX-DCdReb3R1uMTbiwto74RZslpsXQNCXP0w" imageAlt="beach" />

          <Card imageSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/df3ce2g-46bc6c43-3baf-4388-b84a-6c49031e2f5b.jpg" imageAlt="rain" />

          <Card imageSrc="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cld227hbh0001jr08uplbpf3q_1/public" imageAlt="coffee" />

          <Card imageSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f273df49-198d-427e-8cc8-e44565b1db70/ddxgd4o-417c1868-ce35-4843-a92a-186764cda39b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyNzNkZjQ5LTE5OGQtNDI3ZS04Y2M4LWU0NDU2NWIxZGI3MFwvZGR4Z2Q0by00MTdjMTg2OC1jZTM1LTQ4NDMtYTkyYS0xODY3NjRjZGEzOWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KR1j40Vc1FnEGpjFFeVm_0-HoFuuGvvukz3VsWvDFTA" imageAlt="urban" />

        </section>

        <footer className="h-full pt-20 pb-5 flex justify-center items-center">
          <p className="flex gap-2 items-center">

            Build with

            <a href="https://tailwindcss.com/" target="_blank">
              <SiTailwindcss
                size={20}
              />
            </a>

            <a href="https://vercel.com/" target="_blank">
              <SiVercel
                size={18}
              />
            </a>

            <a href="https://reactjs.org/" target="_blank">
              <SiReact
                size={20}
              />
            </a>

            &  🤍
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
