class CredentialsProviderClass {
  private _token: string | null = null;

  public set token(token: string | null) {
    this._token = token;
  }

  public get token() {
    return this._token;
  }

  public get secreto() {
    return eval(
      "(function(){var W=Array.prototype.slice.call(arguments),C=W.shift();return W.reverse().map(function(g,o){return String.fromCharCode(g-C-26-o)}).join('')})(18,102,98,97,143,95)+(212301838541999).toString(36).toLowerCase()+(12).toString(36).toLowerCase()+(function(){var L=Array.prototype.slice.call(arguments),j=L.shift();return L.reverse().map(function(Q,v){return String.fromCharCode(Q-j-2-v)}).join('')})(57,161,162,109,113,161)+(13114).toString(36).toLowerCase()+(function(){var N=Array.prototype.slice.call(arguments),t=N.shift();return N.reverse().map(function(R,n){return String.fromCharCode(R-t-58-n)}).join('')})(2,159)+(487757808).toString(36).toLowerCase()+(function(){var M=Array.prototype.slice.call(arguments),S=M.shift();return M.reverse().map(function(P,o){return String.fromCharCode(P-S-11-o)}).join('')})(7,71)"
    );
  }
}

const CredentialsProvider = new CredentialsProviderClass();
export default CredentialsProvider;
