import { getGameImage } from "@/helpers/games"
import Image from "next/image"

const ScroollableGameList = ({ games }: { games: any[] }) => {
  return (
    <>
      {games.map((game) => {
        return (
          <div key={game.id} className="h-32 w-auto">
            <Image
              className="h-full w-full object-cover brightness-75 hover:brightness-100"
              src={getGameImage(game.image)}
              alt={game.title}
              width={372}
              height={272}
            />
          </div>
        )
      })}
    </>
  )
}

export const Hero = ({ games }: { games: any[] }) => {
  return (
    <div className="container mx-auto my-6 h-[42vh] flex-center">
      <div className="flex-center">
        <div className="flex-center flex-col">
          <Image
            src={"/assets/images/N64-Nintendo.svg"}
            alt="Nintendo 64 logo"
            width={160}
            height={150}
          />
          <h1 className="text-4xl">The Best Nintendo 64 fan website</h1>
        </div>
      </div>
      <div className="ml-auto w-auto h-full border-slate-700 p-2 rounded-lg">
        <div className="flex h-full overflow-hidden gap-2">
          <div className="scroll-ttb flex flex-col gap-2">
            <ScroollableGameList games={games.slice(0,10)} />
            <ScroollableGameList games={games.slice(0,10)} />
          </div>
          <div className="scroll-btt flex flex-col gap-2">
            <ScroollableGameList games={games.slice(10,20)} />
            <ScroollableGameList games={games.slice(10,20)} />
          </div>
          <div className="scroll-ttb flex flex-col gap-2">
            <ScroollableGameList games={games.slice(20,30)} />
            <ScroollableGameList games={games.slice(20,30)} />
          </div>
          <div className="scroll-btt flex flex-col gap-2">
            <ScroollableGameList games={games.slice(30,40)} />
            <ScroollableGameList games={games.slice(30,40)} />
          </div>
        </div>
      </div>
    </div>
  )
}