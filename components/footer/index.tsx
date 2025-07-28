import { Container } from "@/components/container";
import { IconBrandGithub } from "@tabler/icons-react";

export function Footer() {
    return (
        <Container className="bg-neutral-50 dark:bg-neutral-900">
            <footer className="py-2 px-6 flex justify-between">
                <p>Portfolio inspired by {" "}
                    <a className="text-rose-500"
                        href="https://sahilkhan.site">
                            @Sahil Khan
                    </a>
                </p>
                <div>
                    <a href="https://github.com/Itxsahil/nextjs-portfolio-template-with-mdx">
                        <IconBrandGithub height={24} width={24} className="text-rose-500"/>
                    </a>
                </div>
            </footer>
        </Container>
    )
}