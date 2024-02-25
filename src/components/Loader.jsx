import { JellyTriangle } from '@uiball/loaders'

export const Loader = () => {
  return (
    <div className="container-loader">
      <JellyTriangle  size={60}  speed={1.75}  color="black" />
    </div>
  )
}
