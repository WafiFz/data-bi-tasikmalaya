export function titleToSlug(title: string): string {
  return title
    .toLowerCase() // convert to lowercase
    .replace(/\s+/g, '-') // replace spaces with dashes
    .replace(/[^\w-]+/g, '') // remove non-word characters (except dashes)
    .replace(/^-+|-+$/g, '') // remove leading and trailing dashes
}
