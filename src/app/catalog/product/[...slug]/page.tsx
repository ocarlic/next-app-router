interface ProductProps {
  params: {
    slug: string[];
  };
}

// Server Components => A gente não usa JS no lado do client
// Client Components => O JS é enviado ao navegador (client)

// Streaming SSR => Ler/escrever dados de forma parcial + SSR
// Renderizar um componente pelo lado do servidor de forma PARCIAL

export default async function Product({ params }: ProductProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const [productId, size, color] = params.slug;

  return (
    <div>
      <h1>{`Product ${productId}`}</h1>
      <p>{`Size ${size}`}</p>
      <p>{`Color ${color}`}</p>
    </div>
  );
}
