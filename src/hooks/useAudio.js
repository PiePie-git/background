// import xxx v

const useAudio = () => {
  // const j = new xxx(src);

  const play = () => {
    console.log('play video')
  }
  const stop = () => {
    console.log('stop video')
  }
  return {
    play: play,
    stop: stop,
  }
}
export { useAudio }
