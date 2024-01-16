import { SimpleGrid } from '@chakra-ui/react'
import { WorkImage } from './work'

const ThoughtThumbnailList = ({ numOfImages, urlForImage, alt }) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      {Array.from(Array(numOfImages).keys())
        .map(i => i + 1)
        .map(i => (
          <WorkImage key={i} src={urlForImage(i)} alt={`${alt} ${i}`} />
        ))}
    </SimpleGrid>
  )
}

export default ThoughtThumbnailList