import { Container } from "@/components/container";
import { IconBrandGithub } from "@tabler/icons-react";
import { LinkPreview } from "../ui/link-preview";

export function Footer() {
	return (
		<Container className="bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-600 border border-neutral-200">
			<footer className="py-2 px-6 flex justify-between">
				<div>Portfolio inspired by {" "}
					<LinkPreview url="https://www.sahilkhan.site" className="font-bold text-rose-500 dark:text-rose-500">
						@Sahil Khan
					</LinkPreview>
				</div>
				<div>
					<a href="https://github.com/Itxsahil/nextjs-portfolio-template-with-mdx">
						<IconBrandGithub height={24} width={24} className="text-rose-500" />
					</a>
				</div>
			</footer>
		</Container>
	)
}