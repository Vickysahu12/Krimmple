import { useEffect } from 'react'
import { site } from '../config/site'

/** Sets the tab title: "Page | Krimmple", or the brand line on the home page. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | Fashion For Women, Men and Kids`
  }, [title])
}
