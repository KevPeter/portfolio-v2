import {Button} from "@/components/Button";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"},
    {href: "#projects", label: "Projects"},
    {href: "#links", label: "Links"},
];

export const Navbar = () => {
    return (
    <header className="fixed top-0 left-0 right-0 py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight">
                KP<span>.</span>
            </a>

            {/* Desktop Nav */}
            <div className="flex items-center gap-1">
                <div className=" px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 no-underline hover:underline">
                            {link.label}
                        </a>
                    ))}
                </div>
                {/* Contact Button */}
            <div>
                <Button>Contact Me</Button>
            </div>
            </div>

            {/* Contact Button
            <div>
                <Button></Button>
            </div> */}
        </nav>
    </header>);
}