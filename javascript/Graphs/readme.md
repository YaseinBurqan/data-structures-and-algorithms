# Graphs

<!-- Short summary or background information -->

# Code Challenge : Graphs

## Challenge
<!-- Description of the challenge -->
Implement a Graphs Class with the following methods:

addVertex

    Arguments:  value
    Returns: nothing
    This method should Add the key, and set the key pair in the class, handling collisions as needed.
    Should a given key already exist, Ignore this value from the value argument given to this method.

addEdge

    Arguments: key , value

    This method should It adds an edge between source node and destination node.
    
    Returns: Value associated with that key in the class

removeVertex

    Arguments: key

    This method should Adding Edges between Vertices in the Graph: To add edges between two existing vertices such as vertex ‘x’ and vertex ‘y’ then the elements Graph[x][y] and Graph[y][x] of the adjacency matrix will be assigned to 1, depicting that there is an edge between vertex ‘x’ and vertex ‘y’. already.

    Returns: Collection of keys

removeEdge

    Arguments: key , Vertex

    This method should delete edge between (u, v), u’s adjacency list is traversed until v is found and it is removed from it. The same operation is performed for v.

    Returns: Collection of keys

hash

    Arguments: key

    This method should show the required cost to traverse from one vertex to another.

    Returns: Index in the collection for that key

display

    Arguments: key

    This method should display all the vertex.

    Returns: all the vertex

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

    - Understand the problem.

    - Thinking how the results will be.

    - Write the method on paper after testing.

    - Write the code.

    - Making the tests for each file and command.

## API
<!-- Description of each method publicly available to your Linked List -->
- addVertex

- addEdge

- removeVertex

- removeEdge

- hasEdge

- display

## [The Code](./Graphs.js)

![Graphs](./images/Graphs.jpg)
