/*
 * 1.0.5.0
 * COPYRIGHT (c) 2020 mScroll
 */



var totp = {};

(function (totp){

"use strict";

var _WINDOW = window;
var _MATH = _WINDOW.Math;
var _FLOOR = _MATH.floor;
var _DATE = _WINDOW.Date;
var _UINT8ARRAY = _WINDOW.Uint8Array;
var _CHARAT = "charAt";
var _SUBSTRING = "substring";
var _GETTIME = "getTime";
var _LENGTH = "length";
var _VALUE = "value";
var _READONLY = "readOnly";
var _ONLOAD = "onload";
var _ONCLICK = "onclick";
var _ONBLUR = "onblur";
var _ONCHANGE = "onchange";
var _NULL = null;

var _STD = std;
var _TO_HEX = _STD.to_hex;
var _ENUMS = _STD.enums;
var _STD_HTML = _STD.html;
var _POSITION = _STD_HTML.position;
var _WIDTH = _STD_HTML.width;
var _HEIGHT = _STD_HTML.height;
var _TOP = _STD_HTML.top;
var _LEFT = _STD_HTML.left;
var _FONT_SIZE = _STD_HTML.font_size;
var _FONT_WEIGHT = _STD_HTML.font_weight;
var _COLOR = _STD_HTML.color;
var _Z_INDEX = _STD_HTML.z_index;
var _DISPLAY = _STD_HTML.display;
var _TEXT_ALIGN = _STD_HTML.text_align;
var _LINE_HEIGHT = _STD_HTML.line_height;
var _TEXT_DECORATION = _STD_HTML.text_decoration;
var _SRC = _STD_HTML.src;
var _INNERHTML = _STD_HTML.innerHTML;
var _ABSOLUTE = _STD_HTML.absolute;
var _BOLD = _STD_HTML.bold;
var _NONE = _STD_HTML.none;
var _CENTER = _STD_HTML.center;
var _UNDERLINE = _STD_HTML.underline;
var _START = _STD_HTML.start;
var _SPAN = _STD_HTML.span;
var _IMG = _STD_HTML.img;
var _LABEL = _STD_HTML.label;
var _INPUT_TEXT = _STD_HTML.input_text;
var _INPUT_FILE = _STD_HTML.input_file;
var _FLUSH = _STD_HTML.flush;
var _NTH_ELEMENT = _STD_HTML.nth_element;
var _SETVALUE = _STD_HTML.setvalue;
var _GETVALUE = _STD_HTML.getvalue;

var _INTF = intf;
var _REGISTER_READER = _INTF.register_reader;
var _READY = _INTF.ready;
var _FILE = _INTF.file;
var _CLEAR = _INTF.clear;
var _READ = _INTF.read;
var _SHA1I = _INTF.sha1i;
var _SHA1A = _INTF.sha1a;
var _HMAC_I = _INTF.hmac_i;
var _HMAC_A0 = _INTF.hmac_a0;
var _HMAC_A = _INTF.hmac_a;

var _EMPTY = "";
var _PAD = "0";
var _SPACE = " ";
var _COMMA = ",";
var _BLACK = "#000000";
var _WHITE = "#FFFFFF";
var _BLUE = "#0080FF";
var _SHOW_T = ["表示", "非表示"];
var _FILENAME_T = "ファイル名:　";
var _FILESIZE_T = ["サイズ:　", " KB (", " バイト)", " バイト"];
var _SHA1VALUE_T = "SHA-1:　";
var _BASE32 = [
   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
   "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "2", "3", "4", "5", "6", "7",
   "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ",
   "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "Ｘ", "Ｙ", "Ｚ", "２", "３", "４", "５", "６", "７",
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
   "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
   "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ", "ｐ",
   "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "ｘ", "ｙ", "ｚ"
   ];
var _BASE32_N = [
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
   16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
   16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
   16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
   16, 17, 18, 19, 20, 21, 22, 23, 24, 25
   ];

var _IMAGE1 = _ENUMS(0);
var _TEXT1 = _ENUMS();
var _LABEL1 = _ENUMS();
var _SECRET = _ENUMS();
var _SHOW = _ENUMS();
var _TOTP = _ENUMS();
var _TIME = _ENUMS();
var _IMAGE2 = _ENUMS();
var _TEXT2 = _ENUMS();
var _LABEL2 = _ENUMS();
var _CLEARVALUE = _ENUMS();
var _FILENAME = _ENUMS();
var _FILESIZE = _ENUMS();
var _SHA1VALUE = _ENUMS();
var _FILEINPUT = _ENUMS();

var _Base32 = _EMPTY;
var _Secret = new _UINT8ARRAY(0);
var _Count = 0;
var _Load = true;

var _SECRET_F = function ()
   {
   var u = _EMPTY + _NTH_ELEMENT(_SECRET)[_VALUE];
   var v;
   var w;
   var s;
   var t;

   if (u !== _Base32)
      {
      w = [];
      _Base32 = _EMPTY;

      for (s = 0; s < u[_LENGTH]; ++ s)
         {
         v = u[_CHARAT](s);

         for (t = 0; t < _BASE32[_LENGTH]; ++ t)
            {
            if (v === _BASE32[t])
               {
               w[w[_LENGTH]] = _BASE32_N[t];
               _Base32 += _BASE32[_BASE32_N[t]];

               break;
               }
            }
         }

      _Secret = new _UINT8ARRAY(_FLOOR(w[_LENGTH] * 5 / 8));
      u = 0;
      v = 0;
      s = 0;
      t = 0;

      for (; ; )
         {
         if (u < 8)
            {
            if (s < w[_LENGTH])
               {
               u += 5;
               v = v << 5 | w[s];
               ++ s;
               }
            else
               {
               break;
               }
            }
         else
            {
            u -= 8;
            _Secret[t] = v >>> u;
            ++ t;
            v &= (1 << u) - 1;
            }
         }

      _NTH_ELEMENT(_SECRET)[_VALUE] = _Base32;
      _Count = 0;
      }
   };

var _SHOW_F = function ()
   {
   if (_GETVALUE(_SECRET, _COLOR) === _WHITE)
      {
      _SETVALUE(_SHOW,
         _INNERHTML, _SHOW_T[1]);
      _SETVALUE(_SECRET,
         _COLOR, _BLACK);
      }
   else
      {
      _SETVALUE(_SHOW,
         _INNERHTML, _SHOW_T[0]);
      _SETVALUE(_SECRET,
         _COLOR, _WHITE);
      }
   };

var _CLEARVALUE_F = function ()
   {
   _SETVALUE(_FILENAME,
      _DISPLAY, _NONE);
   _NTH_ELEMENT(_FILENAME)[_VALUE] = _EMPTY;
   _SETVALUE(_FILESIZE,
      _DISPLAY, _NONE);
   _NTH_ELEMENT(_FILESIZE)[_VALUE] = _EMPTY;
   _SETVALUE(_SHA1VALUE,
      _DISPLAY, _NONE);
   _NTH_ELEMENT(_SHA1VALUE)[_VALUE] = _EMPTY;
   };

var _FILEINPUT_F = function ()
   {
   var u;

   if (_READY())
      {
      u = _FILE(_FILEINPUT);

      if (u !== _NULL)
         {
         _REGISTER_READER(_FILEINPUT_P);
         _READ(u);
         }
      }

   _CLEAR(_FILEINPUT);
   };

var _FILEINPUT_P = function (Filename_, Data_)
   {
   var u;
   var v;
   var w;
   var x;
   var s;

   if (Filename_ !== _EMPTY)
      {
      _SETVALUE(_FILENAME,
         _DISPLAY, _NULL);
      _NTH_ELEMENT(_FILENAME)[_VALUE] =
         _FILENAME_T
         + Filename_;

      if (Data_[_LENGTH] < 1024)
         {
         v = _EMPTY + Data_[_LENGTH];
         w = _EMPTY;

         for (s = v[_LENGTH]; 0 < s; s -= 3)
            {
            x = s - 3;

            if (x < 0)
               {
               x = 0;
               }

            w = v[_SUBSTRING](x, s) + w;

            if (x === 0)
               {
               break;
               }
            else
               {
               w = _COMMA + w;
               }
            }

         _SETVALUE(_FILESIZE,
            _DISPLAY, _NULL);
         _NTH_ELEMENT(_FILESIZE)[_VALUE] =
            _FILESIZE_T[0]
            + w
            + _FILESIZE_T[3];
         }
      else
         {
         v = _EMPTY + _FLOOR(Data_[_LENGTH] / 1024);
         u = _EMPTY;

         for (s = v[_LENGTH]; 0 < s; s -= 3)
            {
            x = s - 3;

            if (x < 0)
               {
               x = 0;
               }

            u = v[_SUBSTRING](x, s) + u;

            if (x === 0)
               {
               break;
               }
            else
               {
               u = _COMMA + u;
               }
            }

         v = _EMPTY + Data_[_LENGTH];
         w = _EMPTY;

         for (s = v[_LENGTH]; 0 < s; s -= 3)
            {
            x = s - 3;

            if (x < 0)
               {
               x = 0;
               }

            w = v[_SUBSTRING](x, s) + w;

            if (x === 0)
               {
               break;
               }
            else
               {
               w = _COMMA + w;
               }
            }

         _SETVALUE(_FILESIZE,
            _DISPLAY, _NULL);
         _NTH_ELEMENT(_FILESIZE)[_VALUE] =
            _FILESIZE_T[0]
            + u
            + _FILESIZE_T[1]
            + w
            + _FILESIZE_T[2];
         }

      u = new _UINT8ARRAY(20);
      _SHA1I(u);

      if (Data_[_LENGTH] > 0)
         {
         for (s = 0; s < Data_[_LENGTH]; s += 64)
            {
            _SHA1A(u, Data_, s, Data_[_LENGTH], true);
            }
         }
      else
         {
         _SHA1A(u, Data_, 0, Data_[_LENGTH], true);
         }

      v = _EMPTY;

      for (s = 0; s < 20; ++ s)
         {
         v += _TO_HEX(u[s], 2);
         }

      _SETVALUE(_SHA1VALUE,
         _DISPLAY, _NULL);
      _NTH_ELEMENT(_SHA1VALUE)[_VALUE] =
         _SHA1VALUE_T
         + v;
      }
   };

var _RESIZE = function (Width_, Height_)
   {
   };

var _FRMS = function ()
   {
   var u = _FLOOR(new _DATE()[_GETTIME]() / 1000);
   var v = _FLOOR(u / 30);
   var w;
   var x;
   var y;
   var z;
   var r;
   var s;

   if (_Count !== v)
      {
      _Count = v;
      y = _FLOOR(_Count / 4294967296);
      z = _Count % 4294967296;
      r = new _UINT8ARRAY(8);
      r[0] = y >>> 24;
      r[1] = y >>> 16;
      r[2] = y >>> 8;
      r[3] = y;
      r[4] = z >>> 24;
      r[5] = z >>> 16;
      r[6] = z >>> 8;
      r[7] = z;
      v = new _UINT8ARRAY(20);
      w = new _UINT8ARRAY(64);
      x = new _UINT8ARRAY(64);
      _HMAC_I(v, w, x, _Secret, _SHA1I, _SHA1A, 64);
      x = _HMAC_A0(v, x, _SHA1I, _SHA1A);
      _HMAC_A(v, x, r, 72, w, true, _SHA1I, _SHA1A, 64);
      w = v[19] & 0xF;
      x = _EMPTY
         + ((v[w] & 0x7F) << 24 | v[w + 1] << 16 | v[w + 2] << 8 | v[w + 3]) % 1000000;

      for (s = x[_LENGTH]; s < 6; ++ s)
         {
         x = _PAD + x;
         }

      _SETVALUE(_TOTP,
         _INNERHTML, x[_SUBSTRING](0, 3) + _SPACE + x[_SUBSTRING](3, 6));
      }

   _SETVALUE(_TIME,
      _INNERHTML, 30 - u % 30);
   };

var _EXCEPTION = function (E_)
   {
   throw (E_);
   };

totp.load = function ()
   {
   if (_Load)
      {
      _Load = false;

      _FLUSH("TOTP アプリ",
         _IMG(_IMAGE1)
         + _SPAN(_TEXT1,
            "RFC 6238 (TOTP: Time-Based One-Time Password Algorithm)"
            + "<br>に基づいて 6 桁の数字を 30 秒の間隔で生成します。"
            + "<br>数字の生成には HMAC-SHA-1 を使用しています"
            + "<br><br>秘密鍵を入力して、6 桁の数字を生成します。正しい数字を生成する"
            + "<br>ために、このアプリを実行する環境の時刻が適切に設定されている必"
            + "<br>要があります")
         + _SPAN(_LABEL1, "秘密鍵:")
         + _INPUT_TEXT(_SECRET)
         + _SPAN(_SHOW, _SHOW_T[0])
         + _SPAN(_TOTP, _EMPTY)
         + _SPAN(_TIME, _EMPTY)
         + _IMG(_IMAGE2)
         + _SPAN(_TEXT2,
            "ファイルの SHA-1 を計算するオプションです。[参照] からファイル"
            + "<br>を選択して、SHA-1 を表示します")
         + _LABEL(_LABEL2, _FILEINPUT, "参照")
         + _SPAN(_CLEARVALUE, "クリア")
         + _INPUT_TEXT(_FILENAME)
         + _INPUT_TEXT(_FILESIZE)
         + _INPUT_TEXT(_SHA1VALUE)
         + _INPUT_FILE(_FILEINPUT),
         _RESIZE);

      _SETVALUE(_IMAGE1,
         _SRC, "img/48_32.png",
         _POSITION, _ABSOLUTE,
         _TOP, 35,
         _LEFT, 405);
      _SETVALUE(_TEXT1,
         _POSITION, _ABSOLUTE,
         _TOP, 20,
         _LEFT, 30);
      _SETVALUE(_LABEL1,
         _POSITION, _ABSOLUTE,
         _TOP, 20 + 17 * 8,
         _LEFT, 30);
      _SETVALUE(_SECRET,
         _POSITION, _ABSOLUTE,
         _WIDTH, 250,
         _HEIGHT, 15,
         _TOP, 20 + 17 * 8,
         _LEFT, 30 + 50,
         _COLOR, _WHITE,
         _Z_INDEX, 500);
      _NTH_ELEMENT(_SECRET)[_ONBLUR] = _SECRET_F;
      _SETVALUE(_SHOW,
         _POSITION, _ABSOLUTE,
         _TOP, 20 + 17 * 8,
         _LEFT, 350,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_SHOW)[_ONCLICK] = _SHOW_F;
      _SETVALUE(_TOTP,
         _POSITION, _ABSOLUTE,
         _TOP, 20 + 17 * 10,
         _LEFT, 120,
         _FONT_SIZE, 31,
         _FONT_WEIGHT, _BOLD,
         _COLOR, _BLUE,
         _LINE_HEIGHT, 37);
      _SETVALUE(_TIME,
         _WIDTH, 33,
         _HEIGHT, 17,
         _POSITION, _ABSOLUTE,
         _TOP, 20 + 17 * 10 + 10,
         _LEFT, 275,
         _COLOR, _BLUE,
         _TEXT_ALIGN, _CENTER);
      _SETVALUE(_IMAGE2,
         _SRC, "img/16_04.png",
         _POSITION, _ABSOLUTE,
         _TOP, 280,
         _LEFT, 30);
      _SETVALUE(_TEXT2,
         _POSITION, _ABSOLUTE,
         _TOP, 270,
         _LEFT, 70);
      _SETVALUE(_LABEL2,
         _POSITION, _ABSOLUTE,
         _TOP, 270 + 17 * 3,
         _LEFT, 70,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _SETVALUE(_CLEARVALUE,
         _POSITION, _ABSOLUTE,
         _TOP, 270 + 17 * 3,
         _LEFT, 140,
         _COLOR, _BLUE,
         _TEXT_DECORATION, _UNDERLINE);
      _NTH_ELEMENT(_CLEARVALUE)[_ONCLICK] = _CLEARVALUE_F;
      _SETVALUE(_FILENAME,
         _POSITION, _ABSOLUTE,
         _WIDTH, 360,
         _HEIGHT, 15,
         _TOP, 270 + 17 * 5,
         _LEFT, 70,
         _Z_INDEX, 500,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_FILENAME)[_READONLY] = true;
      _SETVALUE(_FILESIZE,
         _POSITION, _ABSOLUTE,
         _WIDTH, 360,
         _HEIGHT, 15,
         _TOP, 270 + 17 * 6,
         _LEFT, 70,
         _Z_INDEX, 500,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_FILESIZE)[_READONLY] = true;
      _SETVALUE(_SHA1VALUE,
         _POSITION, _ABSOLUTE,
         _WIDTH, 360,
         _HEIGHT, 15,
         _TOP, 270 + 17 * 7,
         _LEFT, 70,
         _Z_INDEX, 500,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_SHA1VALUE)[_READONLY] = true;
      _SETVALUE(_FILEINPUT,
         _POSITION, _ABSOLUTE,
         _DISPLAY, _NONE);
      _NTH_ELEMENT(_FILEINPUT)[_ONCHANGE] = _FILEINPUT_F;

      _START(_FRMS, _EXCEPTION, 250);
      }
   };

_WINDOW[_ONLOAD] = totp.load;

})(totp);



/* EOF */