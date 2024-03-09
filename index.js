class JohnyTeam {
    constructor(teamName, projectManager, projectDescription) {
      this.teamName = teamName;
      this.projectManager = projectManager;
      this.projectDescription = projectDescription;
      this.teamMembers = [];
      this.tasks = [];
    }
  
    addTeamMember(memberName, role) {
      this.teamMembers.push({ name: memberName, role: role });
      console.log(`${memberName} has joined the ${this.teamName} team as a ${role}.`);
    }
  
    assignTask(taskName, assignee) {
      const teamMember = this.teamMembers.find(member => member.name === assignee);
      if (teamMember) {
        this.tasks.push({ name: taskName, assignee: assignee });
        console.log(`${taskName} has been assigned to ${assignee}.`);
      } else {
        console.log(`${assignee} is not a member of the ${this.teamName} team.`);
      }
    }
  
    listTasks() {
      console.log(`
        Tasks in ${this.teamName}:
        ${this.tasks.map(task => `${task.name} - Assigned to ${task.assignee}`).join('\n')}
      `);
    }
  
    displayTeamInfo() {
      console.log(`
        ${this.teamName} Team Information:
        Project Manager: ${this.projectManager}
        Project Description: ${this.projectDescription}
        Team Members: ${this.teamMembers.map(member => `${member.name} - ${member.role}`).join(', ')}
      `);
    }
  }
  
  // Example usage
  const johnyProject = new JohnyTeam('Johny Project', 'John Doe', 'A cutting-edge software project');
  
  johnyProject.addTeamMember('Alice', 'Developer');
  johnyProject.addTeamMember('Bob', 'Designer');
  johnyProject.assignTask('Implement Feature A', 'Alice');
  johnyProject.assignTask('Design User Interface', 'Bob');
  johnyProject.listTasks();
  johnyProject.displayTeamInfo();
  