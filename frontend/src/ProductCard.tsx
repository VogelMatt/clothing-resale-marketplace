interface ProductCardProps {
	name: string;
	price: number;
	imageUrl: string;
}

export default function ProductCard({
	name,
	price,
	imageUrl,
}: ProductCardProps) {
	return (
		<div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105">
			<img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
			<div className="p-4">
				<h3 className="text-lg font-semibold text-brand-primary">{name}</h3>
				<p className="text-brand-secondary font-bold">${price.toFixed(2)}</p>
				<button className="mt-2 w-full bg-accent text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
