import React, { useState } from 'react';
import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';

const Videos = () => {
  const videoArr = [
    'https://player.vimeo.com/progressive_redirect/playback/842895194/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=37d4dba17b99d885d7ea100fc734a620a9600ac70a5cf8a7aa8264f5b01a81f5',
    'https://player.vimeo.com/progressive_redirect/playback/843346496/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=e8c5bfcbd9d3135aca21341c9be63fa1959472f04dfaaec3b2c4942101c7404c',
    'https://player.vimeo.com/progressive_redirect/playback/841374954/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=0f1da42c87a5ecd1f15ec24cac5d938d62bc64b308608ad37d784b4eb75fe9cc',
    'https://player.vimeo.com/progressive_redirect/playback/802032496/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=637afe21a3976b9fbb24507020d03125b4424bcb2bc28a732e1655fb8f6b50c6',
    'https://player.vimeo.com/progressive_redirect/playback/824343205/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=daa3350b0d854377a2d666f36c75c25bbc07ebc8d00a215e0720b10d616cb169',
    'hhttps://player.vimeo.com/progressive_redirect/playback/731737547/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4cbaceb1778e6a90c7f9a2a5e8f05fcb9334c71ea5b26959c0fc256cf15365cb',
    'https://player.vimeo.com/progressive_redirect/playback/828228372/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=5872a1af5a907e18acdc8ff1ae478276523ab3148aafe99a9a84e5e400fa06ec',
    'https://player.vimeo.com/progressive_redirect/playback/816018250/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=ee75c685b09cf4342b00a5c2433d4cf0b3600e9b1574775a30e6c7bf7d671192',
    'https://player.vimeo.com/progressive_redirect/playback/802203839/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=af1c5c9653cdfb00adae9e35da155625cc4d8dbf0200cff08f62b3051ccc66a4',
  ];

  const [videosrc, setVideosrc] = useState(videoArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videosrc}
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'3'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is first sample video for simple testing.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        justifyContent={'space-evenly'}
        p={'8'}
        overflowY={'auto'}
      >
        {videoArr.map((item, index) => (
          <Button
            colorScheme={'whatsapp'}
            variant={'ghost'}
            onClick={() => setVideosrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
