import marked from 'marked'

// Parse markdown text
const markdown = (content = '') => {
  if (!content.trim()) {
    return ''
  }
  return { __html: marked(removeInvalidDataURL(content), {sanitize: true})}
}

/**
 * Evil users might try to add base64 url data to execute js code
 * so we should purge any potentially harmful data to mitigate risk
 */
function removeInvalidDataURL (content) {
  let regex = /data:\S+;base64\S*/gm
  return content.replace(regex, '#')
}

export {
  markdown
}
