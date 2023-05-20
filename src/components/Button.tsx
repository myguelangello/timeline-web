const styles = {
  color: '#f00'
}

interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  return (
    <p>
      {props.title}
    </p>
  )
}
