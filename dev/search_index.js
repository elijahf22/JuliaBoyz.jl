var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = JuliaBoyz","category":"page"},{"location":"#JuliaBoyz","page":"Home","title":"JuliaBoyz","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for JuliaBoyz.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [JuliaBoyz]","category":"page"},{"location":"#JuliaBoyz.generate_adjacency_list-Tuple{Any}","page":"Home","title":"JuliaBoyz.generate_adjacency_list","text":"Generates an adjacency list for the junctions of the currently loaded city to represent the graph.\n\n\n\n\n\n","category":"method"},{"location":"#JuliaBoyz.generate_adjacency_matrix-Tuple{Any}","page":"Home","title":"JuliaBoyz.generate_adjacency_matrix","text":"Generates an adjacency matrix for the junctions of the currently loaded city to represent the graph.\n\n\n\n\n\n","category":"method"},{"location":"#JuliaBoyz.generate_greedy_random_solution-Tuple{Any}","page":"Home","title":"JuliaBoyz.generate_greedy_random_solution","text":"Uses a greedy algorithm to generate itineraries for the cars in the currently loaded city.\n\nFor each car, we look at the adjacency lists of the current node and choose the one with the highest distance to duration ratio, which is done by choosing the first street in the adjacency list of the  current node. After traversing a street, add it to a list of already traversed streets.  If a street has already been traversed, we skip it, and go to the next one in the adjacency list. If all adjacent streets from a node are already traveresd, choose a random one.\n\n\n\n\n\n","category":"method"},{"location":"#JuliaBoyz.generate_upper_bound-Tuple{Any}","page":"Home","title":"JuliaBoyz.generate_upper_bound","text":"Naively generates an upper bound on the possible distance by sorting all available streets by  duration to distance ratio, and adding until all time is used up, or all streets are traversed.\n\n\n\n\n\n","category":"method"},{"location":"#JuliaBoyz.get_adjacent_streets-Tuple{Any}","page":"Home","title":"JuliaBoyz.get_adjacent_streets","text":"Perhaps best of both worlds? Stores the street, and therefore, both the adjacent junctions  and the properties of the street.\n\n\n\n\n\n","category":"method"}]
}
