
import styled from 'styled-components'

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;
`


export const ReviewVideo = () => (
    <VideoFrame
      src="https://app.frame.io/reviews/299d4f17-59b5-4f53-8fee-5000e6dcd321/691169ac-93ff-4224-8d2a-bf235f770ddf"
      allow="fullscreen"
      allowFullScreen
      title="Frame.io Review Video"
    />
  )