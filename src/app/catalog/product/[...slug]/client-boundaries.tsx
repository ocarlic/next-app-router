export async function ClientBoundaries() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <h2>h2 server components with client boundaries</h2>;
}
