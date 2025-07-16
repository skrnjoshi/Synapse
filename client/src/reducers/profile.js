import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS,
  REPOS_LOADING
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  reposLoading: false,
  error: {}
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        reposLoading: false
      };
    case REPOS_LOADING:
      return {
        ...state,
        reposLoading: true
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        reposLoading: false
      };
    case NO_REPOS:
      return {
        ...state,
        repos: [],
        reposLoading: false
      };
    default:
      return state;
  }
}

export default profileReducer;
