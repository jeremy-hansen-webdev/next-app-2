interface Props {
    params: {
        slug: string[]
    }
    searchParams: {
      sortOrder: string
    }
}


const ProductPage = async ({params, searchParams}: Props) => {
    const {slug} = await params
    const {sortOrder} = await searchParams
  return (
    <div>
      Product page slug {slug}
      Product query string {sortOrder}
    </div>
  )
}

export default ProductPage
