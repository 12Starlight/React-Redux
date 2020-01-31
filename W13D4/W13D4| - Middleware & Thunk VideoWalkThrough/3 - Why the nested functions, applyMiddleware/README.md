1. How does redux chain each of our middlewares together?
> Answer: By calling `next(action)` inside our inner most function of the middleware.