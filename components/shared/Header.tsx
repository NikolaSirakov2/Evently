import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/">
                <Image src="/assets/images/logo.svg" width={128} height={38} alt="logo"/>
            </Link>
            <div className="flex w-32 justify-end gap-3">

            </div>
        </div>
    </header>
  )
}

export default Header