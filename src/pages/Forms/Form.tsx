import React from 'react';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Form = () => {
  const [inviteMembers, setInviteMembers] = useState([
    {
      name: 'string',
      email: 'string',
      id: uuidv4(),
    },
  ]);
  const [teamMembers, setTeamMembers] = useState([
    {
      teamName: 'string',
      id: uuidv4(),
      members: [
        {
          name: 'string',
          email: 'string',
          id: uuidv4(),
        },
      ],
    },
  ]);
  //add new form feild for adding member
  const addMemberRow = () => {
    //Todo generate random id
    let _inviteMembers = [...inviteMembers];
    _inviteMembers.push({
      name: '',
      email: '',
      id: uuidv4(),
    });
    setInviteMembers(_inviteMembers);
  };
  //remove form feild for adding member

  const removeMemberRow = (id: string) => {
    //Todo generate random id
    let _inviteMembers = [...inviteMembers];
    _inviteMembers = _inviteMembers.filter((member) => member.id !== id);
    setInviteMembers(_inviteMembers);
  };

  //handle email row change

  const handleMemberChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //find the index to be changed
    const index = inviteMembers.findIndex((m) => m.id === id);
    let _inviteMembers = [...inviteMembers] as any;
    _inviteMembers[index][event.target.name] = event.target.value;
    setInviteMembers(_inviteMembers);
  };

  //handle invitation for members
  const handleInvitation = () => {
    console.table(inviteMembers);
  };
  //handle add team
  const handleAddTeam = () => {
    let _teamMembers = [...teamMembers];
    _teamMembers.push({
      teamName: 'string',
      id: uuidv4(),
      members: [
        {
          name: 'string',
          email: 'string',
          id: uuidv4(),
        },
      ],
    });
    setTeamMembers(_teamMembers);
  };
  //handle add new member inside selected team
  const addNewMemberInTeam = (id: string) => {
    const index = teamMembers.findIndex((team) => team.id === id);
    let _teamMembers = [...teamMembers];
    _teamMembers[index].members.push({
      name: '',
      email: '',
      id: uuidv4(),
    });
    setTeamMembers(_teamMembers);
  };

  //handle team data
  const handleTeamData = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = teamMembers.findIndex((team) => team.id === id);

    let _teamMembers = [...teamMembers] as any;

    _teamMembers[index][event.target.name] = event.target.value;
    setTeamMembers(_teamMembers);
  };
  //handle inner member data in team

  const handleMemberInTeamData = (
    teamId: string,
    memberId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const teamIndex = teamMembers.findIndex((team) => team.id === teamId);

    let _teamMembers = [...teamMembers] as any;

    const memberIndex = _teamMembers[teamIndex].members.findIndex(
      (m: any) => m.id === memberId
    );
    _teamMembers[teamIndex].members[memberIndex][event.target.name] =
      event.target.value;
    setTeamMembers(_teamMembers);
  };
  //save team data
  const saveTeamData = () => {
    console.table(teamMembers);
  };
  return (
    <div className="dynamic-form">
      <h2>Invite new members to your team</h2>
      <div className="invite-member">
        {inviteMembers.map((member) => (
          <div className="form-row" key={member.id}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => handleMemberChange(member.id, e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => handleMemberChange(member.id, e)}
              />
            </div>
            {inviteMembers.length > 1 && (
              <button onClick={() => removeMemberRow(member.id)}>-</button>
            )}
            <button onClick={addMemberRow}>+</button>
          </div>
        ))}

        <button className="btn-primary" onClick={handleInvitation}>
          Send invitation
        </button>
      </div>
      {/*2nd level dynamic example */}
      <div className="row-section">
        {teamMembers.map((team) => (
          <div className="row-section_inner" key={team.id}>
            <div className="input-group2">
              <label htmlFor="team">Name of the new team</label>
              <input
                type="text"
                name="team"
                placeholder="Name of the team"
                onChange={(e) => handleTeamData(team.id, e)}
              />
              <h3>Members</h3>
              {team.members.map((member) => (
                <div className="form-row" key={member.id}>
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="name"
                      name="name"
                      placeholder="Name"
                      onChange={(e) =>
                        handleMemberInTeamData(team.id, member.id, e)
                      }
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail address"
                      onChange={(e) =>
                        handleMemberInTeamData(team.id, member.id, e)
                      }
                    />
                  </div>
                  <button onClick={(e) => addNewMemberInTeam(team.id)}>
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="btn" onClick={handleAddTeam}>
          Add new Team
        </button>
        <button className="btn-primary" onClick={saveTeamData}>
          Save team data
        </button>
      </div>
    </div>
  );
};

export default Form;
