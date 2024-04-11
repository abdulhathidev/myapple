class Api::V1::GroupsController < ApplicationController
  def index
    groups = {}
    groups = ['Group1', 'Group2'].map.with_index do | group, idx |
      {
        id: idx,
        name: group
      }
    end
    render json: groups
  end
end
