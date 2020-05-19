/**
 * @ignore
 */
export const CommentThreadData: {
  id?: string
  snippet: {
    channelId: string
    videoId?: string
    topLevelComment: {
      snippet: {
        textOriginal: string
      }
    }
  }
} = {
  snippet: {
    channelId: undefined,
    topLevelComment: {
      snippet: {
        textOriginal: undefined
      }
    }
  }
}

/**
 * @ignore
 */
export const SubscriptionData: {
  snippet: {
    resourceId: {
      kind: 'youtube#channel'
      channelId: string
    }
  }
} = {
  snippet: {
    resourceId: {
      kind: 'youtube#channel',
      channelId: undefined
    }
  }
}

/**
 * @ignore
 */
export const PlaylistData: {
  id?: string
  snippet: {
    title: string
    description?: string
    tags?: string[] | string
    defaultLanguage?: string
  }
  status?: {
    privacyStatus?: 'private' | 'public' | 'unlisted'
  }
  localizations?: {[language: string]: { title: string; description: string }}
} = {
  snippet: {
    title: undefined
  }
}

/**
 * @ignore
 */
export const PlaylistItemData: {
  id?: string
  snippet: {
    playlistId: string
    resourceId: {
      kind: string
      videoId: string
    }
    position?: number
  }
  contentDetails?: {
    note?: string
  }
} = {
  snippet: {
    playlistId: undefined,
    resourceId: {
      kind: 'youtube#video',
      videoId: undefined
    }
  }
}

/**
 * @ignore
 */
export const CommentData: {
  id?: string
  snippet: {
    textOriginal: string
    parentId?: string
  }
} = {
  snippet: {
    textOriginal: undefined
  }
}

/**
 * @ignore
 */
export const WatermarkData: {
  timing: {
    type: string
    offsetMs: number
    durationMs: number
  }
} = {
  timing: {
    type: undefined,
    offsetMs: undefined,
    durationMs: undefined
  }
}
