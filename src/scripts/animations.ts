export async function scrollAnimate() {
  let { gsap } = await import('gsap')
  let { ScrollTrigger } = await import('gsap/ScrollTrigger')

  gsap.registerPlugin(ScrollTrigger)

  let dirX: Record<string, any> = {
    left: -1000,
    right: 1000,
    center: 0,
  }

  let dirY: Record<string, any> = {
    top: -200,
    bottom: 200,
    center: 0,
  }

  document.querySelectorAll('[data-enter]').forEach((node) => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: node,
        start: 'top 90%',
      },
    })

    let options: gsap.TweenVars = {
      x: (_, target) => {
        let dir = target.dataset.enter ?? ''
        return dir in dirX && dirX[dir]
      },
      y: (_, target) => {
        let dir = target.dataset.enter ?? ''
        return dir in dirY && dirY[dir]
      },
      delay: (_, target) => target.dataset.delay,
      opacity: 0,
      duration: (_, target) => {
        let dur = target.dataset.duration
        return dur ? dur : 1.5
      },
      ease: 'power4.out',
      clearProps: 'all',
    }

    let element = node as HTMLElement
    if (element.dataset.hasOwnProperty('group')) {
      // animate children together
      timeline.from(element.children, {
        ...options,
        x: () => {
          let dir = element.dataset.enter ?? ''
          return dir in dirX && dirX[dir]
        },
        y: () => {
          let dir = element.dataset.enter ?? ''
          return dir in dirY && dirY[dir]
        },
        stagger: +(element.dataset.stagger ?? 0),
      })
    } else {
      timeline.from(node, options)
    }
  })
}
