export const hasMark = (value, type) => {
  if (!value.activeMarks || value.activeMarks.size === 0) return false
  return value.activeMarks.some((mark) => mark.type === type)
}

export const hasBlock = (value, type) => {
  return value.blocks.some((block) => block.type === type)
}
