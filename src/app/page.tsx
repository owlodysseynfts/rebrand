import { SvgLinkArrowRight, SvgLogoWhite1, SvgBannerImage} from "@/icons";
import Image from "next/image";
import ThreeCardAnimation from "./components/ThreeAnimation";
import CollectionCard from "./components/CollectionCard";
import OwlAcademyCard from "./components/OwlAcademyCard";
import StoreItemCard from "./components/StoreItemCard";

const collections = [
  {
    id: 1,
    imageUrl: "/images/rage.png",
    title: "Rage Angel",
  }, {
    id: 2,
    imageUrl: "/images/squad.png",
    title: "Squad Vision",
  }, {
    id: 3,
    imageUrl: "/images/rage.png",
    title: "Rage Angel",
  }, {
    id: 4,
    imageUrl: "/images/rage.png",
    title: "Rage Angel",
  }, {
    id: 5,
    imageUrl: "/images/rage.png",
    title: "Rage Angel",
  }, {
    id: 6,
    imageUrl: "/images/squad.png",
    title: "Squad Vision",
  }, {
    id: 7,
    imageUrl: "/images/squad.png",
    title: "Squad Vision",
  }, {
    id: 8,
    imageUrl: "/images/squad.png",
    title: "Squad Vision",
  },
]

const owlAcademy = [{
    id: 1,
    imageUrl: "/images/basic.png",
    title: "Basic Study Intro",
    rating: 5,
    description: "Learn all the basics about Web3 and NFTs, a whole new program"
  },{
    id: 1,
    imageUrl: "/images/nft.png",
    title: "Basic Study Intro",
    rating: 5,
    description: "Learn all the basics about Web3 and NFTs, a whole new program"
  },{
    id: 1,
    imageUrl: "/images/basic.png",
    title: "Basic Study Intro",
    rating: 5,
    description: "Learn all the basics about Web3 and NFTs, a whole new program"
  },
]

const storeItems = [{
  id: 1,
  imageUrl: "/images/item1.png",
  price: 60,
  newPrice: 40,
  rating: 5,
}, {
  id: 2,
  imageUrl: "/images/item2.png",
  price: 60,
  newPrice: 40,
  rating: 5,
}, {
  id: 3,
  imageUrl: "/images/item3.png",
  price: 60,
  newPrice: 40,
  rating: 5,
},{
  id: 4,
  imageUrl: "/images/item2.png",
  price: 60,
  newPrice: 40,
  rating: 5,
},{
  id: 5,
  imageUrl: "/images/item1.png",
  price: 60,
  newPrice: 40,
  rating: 5,
}, {
  id: 6,
  imageUrl: "/images/item2.png",
  price: 60,
  newPrice: 40,
  rating: 5,
}, {
  id: 7,
  imageUrl: "/images/item3.png",
  price: 60,
  newPrice: 40,
  rating: 5,
},{
  id: 8,
  imageUrl: "/images/item2.png",
  price: 60,
  newPrice: 40,
  rating: 5,
}]

export default function Home() {
  return (
    <main className="w-full h-full pb-5">
      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="w-full max-w-[80%] mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Owls</span>
                <SvgLogoWhite1 width="84px" height="96px" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-2">
              <a href="#" className="px-2 py-1.5 text-base font-normal leading-7 text-white hover:bg-orange-500">Home</a>
              <a href="#" className="px-2 py-1.5 text-base font-normal leading-7 text-white hover:bg-orange-500">Owl Academy</a>
              <a href="#" className="px-2 py-1.5 text-base font-normal leading-7 text-white hover:bg-orange-500">Hoot Hub</a>
              <a href="#" className="px-2 py-1.5 text-base font-normal leading-7 text-white hover:bg-orange-500">Blog</a>
              <a href="#" className="px-2 py-1.5 text-base font-normal leading-7 text-white hover:bg-orange-500">About Us</a>
              <a href="#" className="px-2 py-1.5 text-base font-normal leading-7 text-white hover:bg-orange-500">FAQ</a>
            </div>
            <div className="hidden lg:flex justify-end gap-x-8">
              <a href="#" className="block px-6 py-2.5 text-base font-light leading-7 text-gray-900 bg-white hover:bg-gray-100">Log in</a>
              <a href="#" className="block px-6 py-2.5 text-base font-light leading-7 text-gray-900 bg-orange-500 hover:bg-orange-400">Register</a>
            </div>
          </nav>
          {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> */}
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Owl Academy</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Hoot Hub</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About Us</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">FAQ</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-white hover:bg-gray-100">Log in</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-orange-500 hover:bg-orange-400">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="flex justify-between mx-auto w-[80%] py-32 sm:py-48 lg:py-56">
            <div className="text-left max-w-[40%]">
              <h1 className="text-9xl font-bold tracking-tight sm:text-6xl"><span className="text-white">Welcome to the</span> <span className="text-orange-500">World of Owls</span></h1>
              <p className="mt-6 text-lg leading-8 text-gray-100">Explore a realms of gaming and education, uniting for conversation and attraction.</p>
              <div className="mt-10 flex gap-x-6">
                <a href="#" className="flex justify-center items-center gap-2 bg-orange-500 px-8 py-3 text-sm font-light text-gray-900 shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Book a demo <SvgLinkArrowRight width="24px" height="24px" /></a>
              </div>
            </div>
            <div className="w-full max-w-[60%] flex justify-end -mt-[40px]">
              <SvgBannerImage width="450px" height="450px" />
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50% + 3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% + 36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>

        {/* collctions */}
        <div className="w-full max-w-[70%] mx-auto flex items-center flex-col space-y-6 py-12">
          <h2 className="text-3xl font-bold tracking-tight text-white capitalize">Collections</h2>
          <div className="w-full flex flex-wrap items-start justify-start gap-6">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
          <button className='flex px-4 py-2 gap-2  items-center font-normal text-sm border-2 border-orange-500 bg-gray-300 text-black'>View more <SvgLinkArrowRight width="18px" height="18px" /></button>
        </div>

        {/* owl academy */}
        <div className="w-full max-w-[70%] mx-auto flex items-start flex-col space-y-12 py-12">
          <h2 className="text-3xl font-bold tracking-tight text-white w-full text-center capitalize">Owl Academy</h2>
          <h3 className="text-5xl font-bold tracking-tight text-white w-full max-w-[35%]">Grow Your Education With Owl Academy</h3>
          <h3 className="text-3xl font-bold tracking-tight text-white w-full">Featured Academy</h3>
          <div className="w-full flex flex-wrap items-start justify-start gap-6">
            {owlAcademy.map((owl) => (
              <OwlAcademyCard key={owl.id} owlAcademy={owl} />
            ))}
          </div>
          <button className='flex px-4 py-2 gap-2  items-center font-normal text-sm border-2 bg-orange-500 border-gray-200 text-black'>See more <SvgLinkArrowRight width="18px" height="18px" /></button>
        </div>

        {/*  market place */}
        <div className="w-full max-w-[70%] mx-auto flex items-start flex-col space-y-12 py-12">
          <h2 className="text-3xl font-bold tracking-tight text-white w-full text-center capitalize">NFT MARKETPLACE</h2>
          <div className="w-full h-[240px] flex flex-col justify-center items-center bg-contain bg-no-repeat bg-center rounded-3xl space-y-8" style={{ backgroundImage: 'url("/images/banner.png")' }}>
            <h2 className="text-lg font-bold text-white">Explore Community</h2>
            <button className='flex px-6 py-2 gap-2 text-xs items-center font-normal text-orange-500 bg-white rounded-full'>Get Started</button>
          </div>
        </div>

        {/* merchandise */}
        <div className="w-full max-w-[70%] mx-auto flex justify-center items-center flex-col space-y-12 py-12">
          <h2 className="text-3xl font-bold tracking-tight text-white w-full text-center capitalize">MERCHANDISE STORE</h2>
          <div className="w-full flex flex-wrap items-start justify-start gap-6">
            {storeItems.map((storeItem) => (
              <StoreItemCard key={storeItem.id} storeItem={storeItem} />
            ))}
          </div>
          <button className='flex px-4 py-2 gap-2 items-center font-normal text-sm border-2 bg-orange-500 border-gray-200 text-black'>View more <SvgLinkArrowRight width="18px" height="18px" /></button>
        </div>

        {/* games */}
        <div className="w-full max-w-[70%] mx-auto flex items-start flex-col space-y-12 py-12">
          <h2 className="text-3xl font-bold tracking-tight text-white w-full text-center capitalize">GAMES</h2>
          <img src="/images/game_banner.png" alt="collection image" className='w-full h-[280px] rounded-md object-cover' />
        </div>
      </div>
    </main>
  );
}
