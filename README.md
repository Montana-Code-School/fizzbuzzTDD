# FizzBuzz

Fizz buzz is a basic programming challenge that all coders should be able to accomplish.  It's a nice right of passage and also checks all the boxes:  if statements,loops, a bit of call stack logic and a few little gotchas.

It is based on a group word game for children to teach them about division.[1] Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".

This challenge has been built out with `mocha` and `chai` as a testing harness.  

If you have already cloned the repo you can open a terminal instance and navigate to the directory.  One there, remember to run `npm install`.  If this hasn't been done already this will get all of your `node_modules`.

To run your test type `npm test` at the command prompt -> `$`

The challenge has been broken down into two parts

## Part 1

A function that checks number and returns based on those numbers different values, based on these specifications:

```
return "fizz" instead of the number that is divisible by 3
return "buzz" instead of the number that is divisible by 5
return "fizzbuzz" instead of the number that is divisible by both 3 and 5
in all other cases return the number
```

## Part 2

A function that iterates from 0 to any number n, although traditionally 100 is a good place to start.  An optional piece of part 2 is to supply a parameter that returns an array of all the value, run through the `checker`.
