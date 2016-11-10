// tree maker
var nodes;
var edges;
var container;
var data;
var options = {};
var theURL= 'http://localhost:3000';
// var theURL = 'https://csse280-term-project-backend.herokuapp.com'
var members = 0;

function startTree() {
	nodes = getNodes(); // create an array with nodes
	edges = getEdges();  // create an array with edges
	container = $('#mynetwork');  // create network
	data = {
		nodes: nodes,
		edges: edges}; // provide the data in the vis format
}

function getMembers() {
	 $.ajax({
        url: theURL + '/users'
    }).done(function (data){
        for (var i = 0; i < data.length; i++) {
         	console.log(data[i].username);
         } {
        	members += 1;
        }
    });
}

function getNodes() { 
	getMembers();
	nodes = new vis.DataSet([
        {id: 1, label: members},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);
    return nodes;
}

function getEdges() { 
	edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);
    return edges;
}

function getContainer() {
	return container[0];
}

function getData() {
	return data;
}

function getOptions() {
	return options;
}