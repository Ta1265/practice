def follow(curVert, graph, visited):
    depth = 1
    edges = graph[curVert]
    for vert in edges:
        if vert not in visited:
            visited.add(vert)
            depth += follow(vert, graph, visited)
    return depth


def solution(blocks):
    # construct the graph
    graph = {}
    for i in range(0, len(blocks)):
        graph[i] = []
        if i > 0 and blocks[i-1] >= blocks[i]:
            graph[i].append(i-1)
        if i < len(blocks) - 1 and blocks[i+1] >= blocks[i]:
            graph[i].append(i+1)

    max_dist = 0
    start = -1
    for i in range(0, len(blocks)):
        dist = follow(i, graph, {i})
        if dist > max_dist:
            max_dist = dist
            start = i
    return start


def main():
    print(solution([2, 6, 8, 5]))
    print(solution([1, 5, 5, 2, 6]))


if __name__ == '__main__':
    main()
