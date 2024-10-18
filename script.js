// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
  // Adiciona um evento de clique ao botão de adicionar tarefa
  document.getElementById('addTaskBtn').addEventListener('click', addTask);
  
  // Permite adicionar tarefas pressionando Enter
  document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim(); // Remove espaços extras

  // Verifica se o campo de input está vazio
  if (taskText === '') {
    alert('Digite uma tarefa!');
    return;
  }

  // Criar um novo elemento de lista (li)
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  // Adicionar o texto da tarefa
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  // Botão de excluir
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Excluir';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', function() {
    taskItem.remove(); // Remove a tarefa da lista
  });

  // Adicionar um evento de clique para marcar a tarefa como concluída
  taskItem.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  // Adicionar o conteúdo da tarefa e o botão de excluir no item da lista
  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);

  // Adicionar o item da tarefa na lista de tarefas
  document.getElementById('taskList').appendChild(taskItem);

  // Limpar o campo de input após adicionar a tarefa
  taskInput.value = '';
}
