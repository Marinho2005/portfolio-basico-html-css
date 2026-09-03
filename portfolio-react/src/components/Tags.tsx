interface TagsProps {
  items: string[]
}

export function Tags({ items }: TagsProps) {
  return <div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div>
}