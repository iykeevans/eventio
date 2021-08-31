import Flex from '../Styled/Flex'
import Text from '../Styled/Text'
import Button from '../Button'

function ListItem() {
  return (
    <Flex
      direction="column"
      directionMd="row"
      alignItemsMd="center"
      justifyContentMd="between"
      bgColor="eventio.light"
      rounded="eventio.radius"
      shadow="eventio.shadow"
      pl="5"
      pr="5"
      pt="5"
      pb="5"
    >
      <Text color="eventio.base" fontSize="2xl" fontSizeMd="lg">
        How to get angry
      </Text>

      <Text color="eventio.base-light-1" fontSize="base" mb="5" mbMd="0">
        I will show you how to get angry...
      </Text>

      <Text
        color="eventio.base-light"
        fontSize="base"
        fontSizeMd="sm"
        display="none"
        displayMd="block"
      >
        Tom Watts
      </Text>

      <Flex alignItems="center" justifyContent="between">
        <Flex direction="column" directionMd="row" mrMd="16">
          <Text
            color="eventio.base-light-3"
            fontSize="base"
            fontSizeMd="sm"
            mb="2"
            mbMd="0"
            mrMd="10"
          >
            April 4, 2017 – 2:17 PM
          </Text>

          <Text color="eventio.base-light-1" fontSize="base" fontSizeMd="sm">
            9 of 31
          </Text>
        </Flex>

        <Button
          fontSize="base"
          fontSizeMd="sm"
          size="sm"
          variant="eventio.disabled"
        >
          EDIT
        </Button>
      </Flex>
    </Flex>
  )
}

export default ListItem
