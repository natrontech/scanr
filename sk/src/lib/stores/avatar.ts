import { getBaseURL } from "$lib/utils/base";
import { avatarUrl } from "$lib/utils/user.utils";
import { writable } from "svelte/store";

export const avatarUrlString = writable<string>(getBaseURL() + avatarUrl());
