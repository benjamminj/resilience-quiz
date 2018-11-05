# Resilience

## A Few Technical Design Considerations 

### State Management

Since this is just a small app, I opted to use simple React component state to hold the quiz state. For something larger perhaps a Redux store could work, but I felt that the size & scope of the quiz didn't quite merit the amount of boilerplate & added complexity using Redux tends to come with.

### Routing

I finally got to try out [Reach Router](https://reach.tech/router)! 🙌

Reach Router is a super great, simple project that showed up on the React scene in the last year or so — one of the coolest things about this router is that it automagically handles focus state to guarantee that you're never tabbing thru a route that isn't on the screen.

### Animations & Transitions

I had a lot of fun using [`pose`](https://popmotion.io/pose/) for the animations. I've been playing with this lately and it's a fantastic animation library. It makes declaring multi-stage, complex animations fit perfect with the declarative React component model while still feeling like you're authoring them in simple CSS. 👌
