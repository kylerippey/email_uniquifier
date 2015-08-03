# Email uniquifier
This is a little programming exercise that I did as part of a job interview. Try it out here: http://kylerippey.github.io/email_uniquifier/

## The challenge
* Implement a function in coffeescript or javascript to remove all duplicates from a list of 100,000 or more email addresses while keeping the resulting list in original order.
* Assume the list contains 50% randomly placed duplicates.
* The entire process should run in under 1 second on a modern laptop.
* Any input data structure is acceptable.
* Avoid standard library functions that make the problem easy.

## My solution

Here are a few things that our ideal data structure needs:
* Constant time lookup to see if an email address is already inserted.
* Constant time insertion for new email addresses.
* Preservation of insertion order.

This sounds pretty similar to a hash table, except for the insertion order part. Although we don't really need to store key/value pairs. Just values.

In Javascript, objects behave like hash tables, providing constant time lookup and insertion for keys. Modern browsers even maintain insertion order of keys, but this functionality is not universal or gauranteed. As a result, I ended up storing emails in an array as well as the object to ensure that we can retrieve them in the original order.

## Test data

I generated a large [list of sample email address](https://raw.githubusercontent.com/kylerippey/email_uniquifier/master/sample_emails.txt) to help me test my solution. The list is comprised of 100,000 total email addresses. 66,667 are unique and 33,333 are duplicates. Some of the duplicates are in original case while others are in lower case. The unique and duplicate addresses are distributed randomly.

## Results

Using my sample data set, a single run takes 85-100ms on a MacBook Pro running Chrome.
