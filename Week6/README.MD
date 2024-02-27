   
 ## Note : 
  1. using <div> </div> below leads to an extra parent div in the html code render 
  2. to remove this extra parent div we can use <> </> in place of <div> </div> 
  3. a we have to use a parent element anyways 
  4. Also <React.Fragment> </React.Fragment> 
  



### Note : 
1. In react we will eventually have to make a parent component which have childs and thoughs childs also have childs ...like a tree . 
                           
                                                     [1]
                                                    /  \   
                                                   [2]  [3]
                                                 / | \  | \
                                              [4][5][6] [7] [8]

2. So if it has a state variable which has to change say 6 only than we keep it at the lowest comman  asester which in this case is [2] 

3. Why can't we put it in 6 itself? because it can only go down in the tree not up means that if we put the state varible in 6 itself and say it is needed in 5 so there won't be any way to do so 

4.There is another way to handle it issue by using React.memo()

5.
React.memo() is a higher-order component provided by React that you can use to memoize functional components.

6.Memoization in this context means that React will only re-render the component if its props have changed. 

7.This can be helpful in optimizing performance, especially for components that are expensive to render but have the same output given the same props.